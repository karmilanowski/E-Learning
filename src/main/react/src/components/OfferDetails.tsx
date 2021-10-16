import {
  Avatar,
  Grid,
  Chip,
  Typography,
  Stack,
  Box,
  Rating,
  Button,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

type TLocationState = {
  from: {
    path: string;
  };
  props: {
    offerId: number;
    avatarUrl: string;
    avatarAlt: string;
    title: string;
    subtitle: string;
    languageChip: string;
    cityChip: string;
    onlineChip: string;
    price: number;
    time: number;
    rating: number;
  };
};
export const OfferDetails = (props: object) => {
  //data is passed from OfferlistItem by Router <Link as RouterLink>
  const location = useLocation<TLocationState>();

  const {
    avatarUrl,
    avatarAlt,
    title,
    subtitle,
    languageChip,
    cityChip,
    onlineChip,
    price,
    time,
    rating,
  } = location.state.props;

  return (
    <>
      <Grid container sx={{ paddingTop: 10 }}>
        <Grid item sm={2}>
          <Avatar
            alt={avatarAlt}
            src={avatarUrl}
            sx={{ width: 120, height: 120 }}
          >
            {avatarAlt[0]}
          </Avatar>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="h5">
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h5">{subtitle}</Typography>
            <Stack direction="row" spacing={3} sx={{ paddingTop: 2 }}>
              <Chip label={languageChip} icon={<CodeIcon />} color="info" />
              <Chip label={cityChip} icon={<PlaceIcon />} color="info" />
              <Chip
                label={onlineChip}
                icon={<DesktopWindowsIcon />}
                color="info"
              />
            </Stack>
          </Typography>
        </Grid>
        <Grid item sm={2}>
          <Stack direction="column" spacing={0.5}>
            <Box component="span" sx={{ display: "flex" }}>
              <Typography variant="h5">
                {price} zł
                <Typography variant="body2">{time} min.</Typography>
              </Typography>
            </Box>
            <Rating
              name="size-small"
              defaultValue={rating}
              size="small"
              readOnly
            />
            <Button variant="text" startIcon={<MailOutlineIcon />}>
              Kontakt
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Grid md={12} sx={{ paddingTop: 8 }}>
        <Link to="/">
          <Button variant="outlined" fullWidth startIcon={<ArrowBackIosIcon />}>
            Powrót
          </Button>
        </Link>
      </Grid>
    </>
  );
};
