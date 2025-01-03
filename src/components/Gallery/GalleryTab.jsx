import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import {useSelector} from "react-redux";
import {getGalleryNames} from "../../store/gallerySelectors";
import {useNavigate, useParams} from "react-router";
import {HOME_PAGE_ROUTE} from "../../index";
import {TabContext, TabList} from "@mui/lab";
import GalleryTabPanel from "./GalleryTabPanel";
import Divider from '@mui/material/Divider';



function GalleryTab() {
    const navigate = useNavigate();
    const {id: galleryId} = useParams();

    const handleChange = (event, newValue) => {
        navigate(HOME_PAGE_ROUTE + "/gallery/" + newValue);
    };

    const GalleryNameTabs = () => {
        const galleryNames = useSelector(getGalleryNames)
        return galleryNames.map(gallery => {
            return <Tab wrapped key={gallery.id} value={gallery.id} label={gallery.name} style={{background: "white"}} />
        })
    }

    const GalleryTabPanels = () => {
        const galleryNames = useSelector(getGalleryNames)
        return galleryNames.map(gallery => {
            return <TabPanel key={gallery.id} value={gallery.id}>{<GalleryTabPanel key={gallery.id} id={gallery.id} name={gallery.name}></GalleryTabPanel>}</TabPanel>
        })
    }

    return (
        <TabContext value={galleryId}>
            <Box style={{display: 'flex', justifyContent: 'center'}}>
                <TabList
                    value={galleryId}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {GalleryNameTabs()}
                </TabList>
            </Box>
            <Divider variant="middle"/>
            {GalleryTabPanels()}

        </TabContext>
);
}

export default GalleryTab;
