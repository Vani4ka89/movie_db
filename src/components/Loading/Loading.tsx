import React from 'react';

import css from './Loading.module.css';

const Loading = () => {
    return (
        <div className={css.container}>
            <div className={css.loader}>
                <div className={css.loaderDot}></div>
                <div className={css.loaderDot}></div>
                <div className={css.loaderDot}></div>
                <div className={css.loaderDot}></div>
                <div className={css.loaderDot}></div>
                <div className={css.loaderDot}></div>
                <div className={css.loaderText}></div>
            </div>
        </div>
    );
};

export {Loading};