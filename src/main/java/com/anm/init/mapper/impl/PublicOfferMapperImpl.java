package com.anm.init.mapper.impl;

import com.anm.init.controller.response.PriceResponse;
import com.anm.init.controller.response.PublicOfferResponse;
import com.anm.init.controller.response.Trainer;
import com.anm.init.mapper.PriceMapper;
import com.anm.init.mapper.PublicOfferMapper;
import com.anm.init.model.Offer;
import com.anm.init.model.Price;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PublicOfferMapperImpl implements PublicOfferMapper {

    private final PriceMapper priceMapper;

    @Autowired
    public PublicOfferMapperImpl(PriceMapper priceMapper) {
        this.priceMapper = priceMapper;
    }

    @Override
    public PublicOfferResponse mapEntityToResponse(Offer offer) {
        return PublicOfferResponse.builder()
                .withFirstName(offer.getFirstName())
                .withLastName(offer.getLastName())
                .withShortDescription(offer.getShortDescription())
                .withLongDescription(offer.getLongDescription())
                .withBackgroundDescription(offer.getBackgroundDescription())
                .withRateDescription(offer.getRateDescription())
                .withTrainer(Trainer.builder()
                        .withName(offer.getAppUser().getFirebaseName())
                        .withImage(offer.getAppUser().getFirebasePicture())
                        .withPhone(offer.getAppUser().getPhoneNumber())
                        .withRating(null)
                        .build())
                .withPrice(mapPriceListToResponseList(offer.getPrices()))
                .build();
    }

    private List<PriceResponse> mapPriceListToResponseList(List<Price> prices) {
        return prices.stream().map(priceMapper::mapEntityToResponse).collect(Collectors.toList());
    }
}
