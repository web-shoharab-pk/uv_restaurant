import { Grid, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const CardLoader = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} style={{ width: '100%' }}>
                <Grid container spacing={3} style={{ padding: '20px' }}>
                    <Grid item xs={4} md={6} sm={12}>
                        <Skeleton variant="rectangular" width={220} height={120} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="70%" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6} sm={12}>
                        <Skeleton variant="rectangular" width={220} height={120} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="70%" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6} sm={12}>
                        <Skeleton variant="rectangular" width={220} height={120} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="70%" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={6} sm={12}>
                        <Skeleton variant="rectangular" width={220} height={120} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="70%" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default CardLoader;