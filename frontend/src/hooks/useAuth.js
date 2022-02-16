import {UserService} from "../api/user-service";

const useAuth = (login, password) => {
    const fetchData = async () => {
        const response = await UserService.auth(login, password);

        if (response.code === 200) {
            localStorage.token = response.data.apiToken;
        }

        return response;
    }

    return fetchData();
}

export default useAuth;
