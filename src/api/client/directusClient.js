import instance from "../axiosInstance";

export const fetchChildFoldersOfGalleryFolder = async () => {

    try {
        return await instance.get("/folders?filter[_and][0][parent][_eq]=7ff08a9c-2f10-46b3-a3bf-090008ffceb9");
    } catch (error) {
        console.log(error.response)
        return error.response
    }

}