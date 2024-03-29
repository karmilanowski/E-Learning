package com.anm.init.security.auth;

import com.anm.init.model.AppUser;
import com.anm.init.security.auth.models.Credentials;
import com.anm.init.security.auth.models.SecurityProperties;
import com.anm.init.security.auth.models.User;
import com.anm.init.security.utils.CookieUtils;
import com.anm.init.service.AppUserService;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.servlet.http.HttpServletRequest;


@Service
public class SecurityService {

    private final HttpServletRequest httpServletRequest;
    private final CookieUtils cookieUtils;
    private final SecurityProperties securityProps;
    private final AppUserService appUserService;

    public SecurityService(final HttpServletRequest httpServletRequest, final CookieUtils cookieUtils, final SecurityProperties securityProps, AppUserService appUserService) {
        this.httpServletRequest = httpServletRequest;
        this.cookieUtils = cookieUtils;
        this.securityProps = securityProps;
        this.appUserService = appUserService;
    }

    public User getUser() {
        User userPrincipal = null;
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Object principal = securityContext.getAuthentication().getPrincipal();
        if (principal instanceof User) {
            userPrincipal = ((User) principal);
        }
        return userPrincipal;
    }

    public Credentials getCredentials() {
        SecurityContext securityContext = SecurityContextHolder.getContext();
        return (Credentials) securityContext.getAuthentication().getCredentials();
    }

    public boolean isPublic() {
        return securityProps.getAllowedPublicApis().contains(httpServletRequest.getRequestURI());
    }

    public String getBearerToken(HttpServletRequest request) {
        String bearerToken = null;
        String authorization = request.getHeader("Authorization");
        if (StringUtils.hasText(authorization) && authorization.startsWith("Bearer ")) {
            bearerToken = authorization.substring(7);
        }
        return bearerToken;
    }

    public AppUser getAppUserByEmail() {
        return appUserService.findAppUserByFirebaseEmail(getUser().getEmail());
    }
}
