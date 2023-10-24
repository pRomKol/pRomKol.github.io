import {Icon} from "./icon/Icon";
import {SocialLinkBlock, StyledIcon, StyledLink} from "../layout/footer/footericonsblock/FooterIconsBlock";



export const IconsBlock = () => {
    return (
        <SocialLinkBlock gap={'25px'}>
            <StyledIcon>
                <StyledLink href=''>
                    <Icon iconId={'HeaderGitHub'} viewBox={'0 0 33 33'} width={'33'} height={'33'}/>
                </StyledLink>
            </StyledIcon>

            <StyledIcon>
                <StyledLink href=''>
                    <Icon iconId={'HeaderLinkedIn'} viewBox={'0 0 33 33'} width={'33'} height={'33'}/>
                </StyledLink>
            </StyledIcon>

            <StyledIcon>
                <StyledLink href=''>
                    <Icon iconId={'HeaderTelegram'} viewBox={'0 0 35 30'} width={'35'} height={'30'}/>
                </StyledLink>
            </StyledIcon>

        </SocialLinkBlock>
    );
};


