
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../store/languages/slice';
import thunks from '../../store/languages/thunks';


export default function useLanguages() {
    const { lang, languages, isLoading } = useSelector((state) => state.languages);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(thunks.fetchLanguages())
    }, []);

    useEffect(() => {
        Object.keys(languages).length && dispatch(setLang(Object.keys(languages)[0]))

    }, [languages]);
    return { lang, languages, isLoading, setLang }
}
