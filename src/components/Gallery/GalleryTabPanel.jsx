import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "react-photo-album/rows.css";

import {RowsPhotoAlbum} from "react-photo-album";
import {getImagesInGallery} from "../../store/gallerySelectors";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGalleryImages} from "../../store/galleryFilesAction";
import Typography from "@mui/material/Typography";

export default function GalleryTabPanel(props) {

    const {id: galleryId, name: galleryName} = props
    const galleryImages = useSelector(getImagesInGallery(galleryId));
    const slides = galleryImages.map( img =>  {
        return {
            src: "https://directus.jangrahul.top/assets/"+ img.id + "?key=system-large-contain&access_token=ICjts38qSe2wUB6Y2d_jtBo5WVpzRdnL",
            width: img.width,
            height: img.height,
        }
    });
    const slidesHD = galleryImages.map( img =>  {
        return {
            src: "https://directus.jangrahul.top/assets/"+ img.id + "?key=system-large-contain&access_token=ICjts38qSe2wUB6Y2d_jtBo5WVpzRdnL",
            width: img.width,
            height: img.height,
        }
    });
    const [index, setIndex] = React.useState(-1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!galleryImages || !galleryImages.length) {
            dispatch(fetchGalleryImages(galleryId));
        }
    }, []);



    return (
        <>
            <RowsPhotoAlbum
                photos={slides}
                onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
                index={index}
                slides={slidesHD}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
    );
}
