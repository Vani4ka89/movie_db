import React, {FC, useEffect, useState} from 'react';

import {Badge} from "../Badge/Badge";
import {genreService} from "../../../services/genre.service";
import {IGenreBadge} from "../../../interfaces/genreBadge.interface";
import css from './GenreBadgeList.module.css';

const GenresBadgesList: FC = () => {
    const [badges, setBadges] = useState<IGenreBadge[]>([]);

    useEffect(() => {
genreService.getAll().then(({data:{genres}})=>setBadges(genres))
    }, []);

    return (
        <div className={css.GenreBadgeList}>
            {badges.map(badge => <Badge key={badge.id} badge={badge}/>)}
        </div>
    );
};

export {GenresBadgesList};