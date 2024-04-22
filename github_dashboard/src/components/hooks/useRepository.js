
import { useDispatch, useSelector, } from 'react-redux';
import thunks from '../../store/repository/thunks'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function useRepository() {
    const dispatch = useDispatch();
    const { id } = useParams()
    const { repository, isLoading } = useSelector((state) => state.repository);
    useEffect(() => {
        dispatch(thunks.fetchRepository(id));

    }, [])
    return { repository, isLoading }
}