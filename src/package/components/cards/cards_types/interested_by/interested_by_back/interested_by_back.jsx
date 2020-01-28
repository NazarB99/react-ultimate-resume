import React, { useMemo } from 'react';

import { createUseStyles, useTheme } from 'react-jss';

import { InterestedByFront } from '../interested_by_front/interested_by_front';

import { styles } from './interested_by_back_styles';
import { useCardVariant } from '../../../../commons/profile_card/profile_card_hooks/use_card_variant';
import { getColorsFromCardVariant } from '../../../../../utils/styles/styles_utils';

const useStyles = createUseStyles(styles);

const InterestedByBackComponent = props => {
    const [variant] = useCardVariant();
    const classes = useStyles({ variant });
    const theme = useTheme();
    const overrideColor = useMemo(() => getColorsFromCardVariant(theme, variant).backgroundColor, [theme, variant]);

    return (
        <InterestedByFront
            customClasses={{
                container: classes.container
            }}
            profileCardFrontTypographyProps={{
                overrideColor
            }}
            {...props}
        />
    );
};

export const InterestedByBack = InterestedByBackComponent;
