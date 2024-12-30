import {RowsPhotoAlbum} from "react-photo-album";
import React from "react";
import {useSelector} from "react-redux";
import {getGalleryNames} from "../store/gallerySelectors";
import {useNavigate} from "react-router";
import {HOME_PAGE_ROUTE} from "../index";

const WorkCover = () => {
    const navigate = useNavigate();

    const galleryNames = useSelector(getGalleryNames)

    const slidesHD = galleryNames.map( galleryDetails =>  {
        const coverDetails = galleryDetails.coverDetails
        return {
            title: galleryDetails.title,
            key: galleryDetails.id,
            src: "https://directus.jangrahul.top/assets/"+ coverDetails.id + "?key=system-large-cover&access_token=ICjts38qSe2wUB6Y2d_jtBo5WVpzRdnL",
            width: coverDetails.width,
            height: coverDetails.width,
        }
    });

    const navigateToGallery = (event) => {
        navigate(HOME_PAGE_ROUTE + "/gallery/" + event.photo.key);
    }

    return(
        <section style={{display: "block", justifyContent: "center", alignItems: "center"}}>
            <RowsPhotoAlbum
                photos={slidesHD}
                padding={10}
                rowConstraints={{ singleRowMaxHeight: 250 }}
                onClick={navigateToGallery}
            />
        </section>
    )
}

export default WorkCover