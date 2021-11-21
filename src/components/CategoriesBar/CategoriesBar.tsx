import { useTypedSelector } from '../../hooks/useTypedSelector';
import { StyledCategoriesBar } from './CategoriesBar.styled';
import { CategoriesLink } from './CategoriesLink/CategoriesLink.styled'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback, useEffect, useState } from 'react';

const CategoriesBar: React.FC = () => {
    const offsetAmount = useMediaQuery('(max-width:700px)') ? -220 : -150;
    const [isShadowActive, setIsShadowActive] = useState(false);
    const handleScroll = useCallback((event) => {
        let scrollTop = window.scrollY;
        if (scrollTop > 300) {
            setIsShadowActive(true);
        }
        else{
            setIsShadowActive(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [handleScroll]);
    const Categories = useTypedSelector((state) => {
        return state.shop.data?.foodGroups.map(({ name, id }) => { return { name, id } })
    })
    return (
        <StyledCategoriesBar $shadow={isShadowActive}>
         {/* <StyledCategoriesBar> */}
            <div className="content">
                {Categories?.map(category =>
                    <CategoriesLink key={category.id} offset={offsetAmount} activeClass="test" to={`foodGroup${category.id}`} spy={true} smooth={true} duration={300} className="links">
                        {category.name}
                    </CategoriesLink>)}
            </div>
        </StyledCategoriesBar>
    );
}
export default CategoriesBar