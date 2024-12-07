import { Component } from 'react';
import { Box, Tab, Typography } from '@mui/material';

interface TabItem {
    label: string;
    key: string;
}

interface PortfolioTabsProps {
    updateSlides: (selectedTab: string) => void;
}

interface PortfolioTabsState {
    selectedTab: string;
}

export class PortfolioTabs extends Component<PortfolioTabsProps, PortfolioTabsState> {
    private tabItems: TabItem[] = [
        { label: "all", key: "all" },
        { label: "ui/ux design", key: "uiux" },
        { label: "product design", key: "product" },
        { label: "branding", key: "branding" },
        { label: "web design", key: "web" }
    ];

    constructor(props: PortfolioTabsProps) {
        super(props);
        this.state = {
            selectedTab: "all" // "all" is selected by default
        };
    }

    handleTabClick = (key: string) => {
        this.setState({ selectedTab: key });
        this.props.updateSlides(key);
    }

    render() {
        const { selectedTab } = this.state;

        return (
            <Box sx={{ display: 'flex', borderBottom: 'none' }}>
                {this.tabItems.map((tab) => (
                    <Tab
                        key={tab.key}
                        onClick={() => this.handleTabClick(tab.key)}
                        sx={{
                            minWidth: 'auto',
                            padding: '4px 12px', 
                            marginRight: tab.key === 'web' ? '0' : '24px',
                            border: selectedTab === tab.key ? (theme) => `2px solid ${theme.palette.accent.main}` : 'none',
                            borderRadius:'5px',
                            backgroundColor: 'transparent',
                            color: selectedTab === tab.key ? (theme) => theme.palette.accent.main : (theme) => theme.palette.text.secondary,
                            outline: 'none',
                            '&.Mui-selected': {
                                color: (theme) => theme.palette.accent.main,
                            },
                            '&:focus': {
                                outline: 'none'
                            },
                            '&:hover': {
                                border: selectedTab === tab.key ? (theme) => `2px solid ${theme.palette.accent.main}` : 'none',
                            }
                        }}
                        label={
                            <Typography
                                sx={{
                                    textTransform: 'uppercase',
                                    fontFamily: 'Montserrat',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                }}
                            >
                                {tab.label}
                            </Typography>
                        }
                    />
                ))}
            </Box>
        );
    }
}

