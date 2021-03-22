import React, { useState } from "react";
import './styles.scss';
import trails from "./../../images/trasy.jpg";
import bike from "./../../images/bike-down.jpg";
import forest from "./../../images/forest-trail-by-pajunen.jpg";
import bridge from "./../../images/bridge.jpg";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
    return (
        <div>
            <AutoRotatingCarousel
                label=""
                open={handleOpen.open}
                onClose={() => setHandleOpen({ open: false })}
                onStart={() => setHandleOpen({ open: false })}
                autoplay={false}
                mobile={isMobile}
                style={{ position: "absolute" }}
            >
                <Slide
                    media={
                        <img src={trails} alt='trails in Bielsko-biała'/>
                    }
                    mediaBackgroundStyle={{ backgroundColor: '#dda63a' }}
                    style={{ backgroundColor: '#C89225' }}
                    title="Look ath this Trails!"
                    subtitle="Just using this will blow your mind."
                />
                <Slide
                    media={
                        <img src={bridge} alt='bridge'/>
                    }
                    mediaBackgroundStyle={{ backgroundColor: red[400] }}
                    style={{ backgroundColor: red[600] }}
                    title="Watch out!"
                    subtitle="You can jump to the water"
                />
                <Slide
                    media={
                        <img src={bike} alt='bike in downhill road'/>
                    }
                    mediaBackgroundStyle={{ backgroundColor: blue[400] }}
                    style={{ backgroundColor: blue[600] }}
                    title="Ever wanted to be popular?"
                    subtitle="Well just love your hobby and improve skills"
                />
                <Slide
                    media={
                        <img src={forest} alt='forest'/>
                    }
                    mediaBackgroundStyle={{ backgroundColor: green[400] }}
                    style={{ backgroundColor: green[600] }}
                    title="May the force be with you"
                    subtitle="Riding a downhill road you dont have time to watch the view"
                />
            </AutoRotatingCarousel>
        </div>
    );
};

function Gallery() {
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = () => {
        setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:600px)");
    return (
        <>
            <Button onClick={handleClick} className={'carousele__btn'}>Open carousel</Button>
            <AutoRotatingCarouselModal
                isMobile={matches}
                handleOpen={handleOpen}
                setHandleOpen={setHandleOpen}
            />
        </>
    );
}

export default Gallery;