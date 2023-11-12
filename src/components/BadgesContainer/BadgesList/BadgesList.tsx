import React, {FC, useEffect, useState} from 'react';

import {Badge} from "../Badge/Badge";
import {genreService} from "../../../services";
import {IGenreBadge} from "../../../interfaces";
import css from './BadgesList.module.css';

const BadgesList: FC = () => {
    const [badges, setBadges] = useState<IGenreBadge[]>([]);

    useEffect(() => {
        genreService.getAll().then(({data: {genres}}) => setBadges(genres));
    }, []);

    return (
        <div className={css.BadgesList}>
            {badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
        </div>
    );
};

export {BadgesList};