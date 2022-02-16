import {UserService} from "../api/user-service";

const useCheckToken = () => {
    const fetchData = async () => {
        const response = await UserService.checkToken();

        if (response.code === 200) {
            return true;
        }

        return false;
    }

    return fetchData();
}

export default useCheckToken;
