import instance from "../axiosInstance";

export const fetchChildFoldersOfGalleryFolder = async () => {

    try {
        return await instance.get("/folders?filter[_and][0][parent][_eq]=7ff08a9c-2f10-46b3-a3bf-090008ffceb9");
    } catch (error) {
        console.log(error.response)
        return error.response
    }

}

export const fetchCoverImagesOfGalleries = async () => {

    try {
        // Currently directus only supports checking tags=null or tags = not-null.
        // In future when they give feature to search on tags, we can create more specific query
        return await instance.get("/files?fields[]=folder&fields[]=id&fields[]=type&fields[]=title&fields[]=width&fields[]=height&filter[_and][0][tags][_nnull]=true");
    } catch (error) {
        console.log(error.response)
        return error.response
    }

}

export const fetchImageNamesInFolder = async (folderId) => {
    try {
        return await instance.get("/files?fields[]=id&fields[]=type&fields[]=title&fields[]=width&fields[]=height&sort[]=title&filter[_and][0][type][_eq]=image/jpeg&filter[_and][1][folder][_eq]=" + folderId);
    } catch (error) {
        console.log(error.response)
        return error.response
    }
}