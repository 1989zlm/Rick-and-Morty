import { CHARACTERS_URL } from "../../service/urls";
import { getRequest } from "../../service/verb";
import { CHARACTERS_REJECT, FETCH_CHARACTERS, PENDİNG_CHARACTERS, PENDING_SINGLECHARACTER, FETCH_SINGLECHARACTER, SINGLECHARACTER_REJECT, CHANGE_PARAMS } from "../types/charactersTypes";

export const getCharacterList = params => {
    return async dispatch => {
        dispatch({ type: PENDİNG_CHARACTERS });
        try {
            const response = await getRequest(CHARACTERS_URL, params)
            // console.log(response);
            dispatch({
                type: FETCH_CHARACTERS,
                payload: response.data.results,
            })
        } catch (error) {
            // console.log(error)
            dispatch({ type: CHARACTERS_REJECT, error: error })

        }
    }
};

export const getSingleCharacter = characterID => {
    const url = `${CHARACTERS_URL}/${characterID}`
    return async dispatch => {
        dispatch({ type: PENDING_SINGLECHARACTER });
        try {
            const response = await getRequest(url);
            //console.log(response.data)
            dispatch({
                type: FETCH_SINGLECHARACTER,
                payload: response.data,
            })
        } catch (error) {
            //console.log(error)
            dispatch({ type: SINGLECHARACTER_REJECT, error: error })
        }

    };
}

export const changeParams = params => {
    return async dispatch => {
        dispatch({ type: CHANGE_PARAMS, params: params })
    }
};