import styled from "styled-components";
import { PortfolioItem } from "./types";
import { PortfolioCard } from "./PortfolioCard";
import addPortfolioButton from '../assets/add-portfolio-btn.png'
import { useModalState } from "../Common/ModalStateProvider";

interface IPortfolioCarouselProps {
    readonly items: PortfolioItem[];
}

export const PortfolioCarousel = ({ items }: IPortfolioCarouselProps) => {
    const modalState = useModalState("createPortfolio");

    const handleClickAddPortfolio = () => {
        if (modalState) {
            const { setOpen } = modalState;
            setOpen(value => !value);
        }
    }

    return (
        <CarouselContainerStyled>
            <CarouselStyled>
                {items.length ? items.map((x, index) => <PortfolioCard key={index} item={x} />) : null}
                <AddButtonCardStyled>
                    <button onClick={handleClickAddPortfolio}>
                        <img src={addPortfolioButton} alt="Add Portfolio" />
                    </button>
                </AddButtonCardStyled>
            </CarouselStyled>
        </CarouselContainerStyled>
    )
}

// [== STYLES ==]
const CarouselContainerStyled = styled.div`
    width: 100%;
    overflow: hidden;
`;

const CarouselStyled = styled.div`
    display: flex;
    padding: 20px;
    padding-top: 0;
    gap: 10px;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
`;

const AddButtonCardStyled = styled.div`
    background: none;
    width: auto;
    flex: none;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    > button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    > button > img {
        width: 40px;
        height: 40px; 
    }
`;