import { useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import thunks from '../../store/repositories/thunks'
import useLanguages from './useLanguages';

export default function useRepositories() {
    const { lang } = useLanguages();
    const { repositories, isLoading } = useSelector((state) => state.repositories);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunks.fetchRepositories(lang))
    }, [lang])

    return { repositories, isLoading }
}