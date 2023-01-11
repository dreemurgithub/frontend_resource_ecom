import axiosClient from './axiosClient';
const admin_fetch = {
    getProduct: () => {
        const url = `/admin/products`;
        return axiosClient.get(url);
    }

}
export default admin_fetch