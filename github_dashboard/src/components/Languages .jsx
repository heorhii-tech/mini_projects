import React from 'react';
import '../styles.scss';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useLanguages from './hooks/useLanguages';
import { useDispatch } from 'react-redux';

function Languages(props) {
    const dispatch = useDispatch()
    const { lang, languages, isLoading, setLang } = useLanguages()
    const handleSetLang = (e, value) => {
        dispatch(setLang(value))
    }
    return (
        <div className='languages_wrapper'>
            <Typography variant="caption">{isLoading ?
                <div className='skeleton_languages_wrapper'>
                    {[...new Array(6)].map((item, index) => {
                        return <Skeleton key={index} />

                    })}
                </div>
                :
                <Box

                    sx={{
                        flexGrow: 1,
                        maxWidth: { xs: '90%', sm: '90%' },
                        bgcolor: 'background.paper',
                    }}
                >
                    <Tabs
                        value={lang}
                        onChange={handleSetLang}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        {Object.keys(languages).map((item, index) => {

                            return <Tab key={index} value={item} label={item} />
                        })}
                    </Tabs>
                </Box>
            }
            </Typography>

        </div>
    );
}

export default Languages;