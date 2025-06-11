"use strict";
const fullOrganogram = [
    {
        "designation": "Director General Mines & Minerals | DGMM",
        "scale": "BS-20",
        "posting": "Head Quarters",
        "subordinates": [
            {
                "designation": "Personal Assistant to Director General | PA TO DG | PA(DG)",
                "scale": "BS-16",
                "posting": "Head Quarters"
            },
            {
                "designation": "Suprintendent Receipt and Issue | Suprintendent(R&I)",
                "scale": "BS-17",
                "posting": "Head Quarters"
            },
            {
                "designation": "Director Resource Mapping| Director RMD",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Manager CS",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Deputy Manager CS",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    },
                    {
                        "designation": "Manager GM",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Deputy Manager GM",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    },
                    {
                        "designation": "Manager GP",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Deputy Manager GP",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    },
                    {
                        "designation": "Manager GC",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Deputy Manager GC",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    },
                    {
                        "designation": "Manager BS",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Deputy Manager BS",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    },
                    {
                        "designation": "Assistant Engineer Mechnical",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "Assistant Engineer Electrical",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    }
                ]
            },
            {
                "designation": "Director GIS",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Manager GIS",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Computer Programmer",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "GIS Development Officer 1",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "GIS Development Officer 2",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "GIS Development Officer 3",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "GIS Development Officer 4",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "GIS Development Officer 5",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    }
                ]
            },
            {
                "designation": "Director Information Promotion & Service ",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Manager Information Technology| Manger IT",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Computer Programmer",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "Network Administrator",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "Database Administrator",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "Hardware Technician",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            },
                            {
                                "designation": "Librarian",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    }
                ]
            },
            {
                "designation": "Director Small Mines Assistance / Titles | Director SMA/T | LA Small Scale Mining",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Personal Assistant to Small Mines Assistance / Titles | PA To Director SMA/T | PA TO LA Small Scale Mining",
                        "shortform": "PA(Director SMA/T)",
                        "scale": "BS-16",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "Deputy Director AUCTION HQ",
                        "shortform": "DD(AUCTION)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director AUCTION HQ",
                                "shortform": "AD(AUCTION)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent AUCTION HQ",
                                        "shortform": "Suprintendent(AUCTION)",
                                        "scale": "Bs-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director HEADQUARTER",
                        "shortform": "DD(HQR)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director HEADQUARTER",
                                "shortform": "AD(HQ)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent HEADQUARTER",
                                        "shortform": "Suprintendent(HQ)",
                                        "scale": "Bs-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director Mining Lease 1 HQ",
                        "shortform": "DD(ML1)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director Mining LEASE 1 HQ",
                                "shortform": "AD(ML1)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent Mining Lease 1 HQ",
                                        "shortform": "Suprintendent(ML1)",
                                        "scale": "Bs-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director Mining Lease 2 HQ",
                        "shortform": "DD(ML2)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director Mining Lease 2 HQ",
                                "shortform": "AD(ML2)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent Mining Lease 2 HQ",
                                        "shortform": "Suprintendent(ML2)",
                                        "scale": "Bs-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director Prospecting License HQ",
                        "shortform": "DD(PL)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director Prospecting License HQ",
                                "shortform": "AD(PL)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent Prospecting License HQ",
                                        "shortform": "Suprintendent(PL)",
                                        "scale": "Bs-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director Mining Consession HQ",
                        "shortform": "DD(MC)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director Mining Consession HQ",
                                "shortform": "AD(MC)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent Mining Consession HQ",
                                        "shortform": "Suprintendent(MC)",
                                        "scale": "Bs-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director CHAKWAL",
                        "shortform": "DD(CKL)",
                        "scale": "Bs-18",
                        "posting": "Chakwal",
                        "subordinates": [
                            {
                                "designation": "Assistant Director Chakwal",
                                "shortform": "AD(CKL)",
                                "scale": "Bs-17",
                                "posting": "Chakwal",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent CHAKWAL",
                                        "shortform": "Suprintendent(CKL)",
                                        "scale": "Bs-17",
                                        "posting": "Chakwal"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director MIANWALI",
                        "shortform": "DD(MLI)",
                        "scale": "Bs-18",
                        "posting": "Mianwali",
                        "subordinates": [
                            {
                                "designation": "Assistant Director MIANWALI HQ",
                                "shortform": "AD(MLI)",
                                "scale": "Bs-17",
                                "posting": "Mianwali",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent MIANWALI",
                                        "shortform": "Suprintendent(MLI)",
                                        "scale": "Bs-17",
                                        "posting": "Mianwali"
                                    },
                                    {
                                        "designation": "Geologist MIANWALI",
                                        "shortform": "Geologist(MIANWALI)",
                                        "scale": "Bs-17",
                                        "posting": "Mianwali"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director KHUSHAB",
                        "shortform": "DD(KHB)",
                        "scale": "Bs-18",
                        "posting": "khushab",
                        "subordinates": [
                            {
                                "designation": "Assistant Director KHUSHAB HQ",
                                "shortform": "AD(KHB)",
                                "scale": "Bs-17",
                                "posting": "khushab",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent KHUSHAB",
                                        "shortform": "Suprintendent(KHB)",
                                        "scale": "Bs-17",
                                        "posting": "khushab"
                                    },
                                    {
                                        "designation": "Geologist KHUSHAB",
                                        "shortform": "Geologist(KHB)",
                                        "scale": "Bs-17",
                                        "posting": "khushab"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "designation": "Director Administration | Director Admin",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Assistant Director Admin",
                        "shortform": "AD(Admin)",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "Assistant Director Establishment",
                        "shortform": "AD(Estt.)",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "Account OFFICER Drawing & Disbursement",
                        "shortform": "Account Officer (DDO)",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "Assistant Director P&C",
                        "shortform": "AD (P&C)",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "Suprintendent Budget & Accounts",
                        "shortform": "Suprintendent (B&A)",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    },
                    {
                        "designation": "AUDIT OFFICER",
                        "shortform": "AUDIT OFFICER",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    }
                ]
            },
            {
                "designation": "Director Environmental Facilitation & Infrastructure Development | Director EF&ID",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Manager Environmental Facilitation | Manager EF",
                        "scale": "BS-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Deputy Manager Environmental Facilitation | Deputy Manager EF",
                                "scale": "BS-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent Environmental Facilitation | Suprintendent EF",
                                        "scale": "BS-17",
                                        "posting": "Head Quarters"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "designation": "Director Minor Mineral | Licensing Authority Minor Mineral | Director MM | LA Minor Mineral",
                "scale": "BS-19",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Deputy Director HQR(Minor Minerals)",
                        "shortform": "DD(HQR)",
                        "scale": "Bs-18",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Assistant Director HQR(Minor Minerals",
                                "shortform": "AD(HQR)",
                                "scale": "Bs-17",
                                "posting": "Head Quarters",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent HQ (Minor and Minerals)",
                                        "shortform": "Suprintendent (HQR)",
                                        "scale": "BS-17",
                                        "posting": "Head Quarters",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant Director HQR(Minor Minerals",
                                                "shortform": "Assistant(HQR)",
                                                "scale": "BS-16",
                                                "posting": "Head Quarters"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director DG KHAN",
                        "shortform": "DD(DGK)",
                        "scale": "Bs-18",
                        "posting": "DG KHAN",
                        "subordinates": [
                            {
                                "designation": "Assistant Director DG KHAN",
                                "shortform": "AD(DGK)",
                                "scale": "Bs-17",
                                "posting": "DG KHAN",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent DG KHAN",
                                        "shortform": "Suprintendent DGK",
                                        "scale": "BS-17",
                                        "posting": "DG KHAN",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant DG KHAN",
                                                "shortform": "Assistant(DGK)",
                                                "scale": "BS-16",
                                                "posting": "DG KHAN"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director MULTAN",
                        "shortform": "DD(MNT)",
                        "scale": "Bs-18",
                        "posting": "MULTAN",
                        "subordinates": [
                            {
                                "designation": "Assistant Director MULTAN",
                                "shortform": "AD(MNT)",
                                "scale": "Bs-17",
                                "posting": "MULTAN",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent MULTAN",
                                        "shortform": "Suprintendent (MNT)",
                                        "scale": "BS-17",
                                        "posting": "MULTAN",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant MULTAN",
                                                "shortform": "Assistant(MNT)",
                                                "scale": "BS-16",
                                                "posting": "MULTAN"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "designation": "Assistant Director BAHAWALPUR",
                                "shortform": "AD(BWP)",
                                "scale": "Bs-17",
                                "posting": "BAHAWALPUR",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent BAHAWALPUR",
                                        "shortform": "Suprintendent(BWP)",
                                        "scale": "BS-17",
                                        "posting": "BAHAWALPUR",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant BAHAWALPUR",
                                                "shortform": "Assistant(BWP)",
                                                "scale": "BS-16",
                                                "posting": "BAHAWALPUR"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director RAWALPINDI",
                        "shortform": "DD(RWP)",
                        "scale": "Bs-18",
                        "posting": "RAWALPINDI",
                        "subordinates": [
                            {
                                "designation": "Assistant Director RAWALPINDI",
                                "shortform": "AD(RWP)",
                                "scale": "Bs-17",
                                "posting": "RAWALPINDI",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent RAWALPINDI",
                                        "shortform": "Suprintendent(RWP)",
                                        "scale": "BS-17",
                                        "posting": "RAWALPINDI",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant RAWALPINDI",
                                                "shortform": "Assistant(RWP)",
                                                "scale": "BS-16",
                                                "posting": "RAWALPINDI"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "designation": "Assistant Director ATTOCK",
                                "shortform": "AD(ATK)",
                                "scale": "Bs-17",
                                "posting": "ATTOCK",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent ATTOCK",
                                        "shortform": "Suprintendent(ATK)",
                                        "scale": "BS-17",
                                        "posting": "ATTOCK",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant ATTOCK",
                                                "shortform": "Assistant(ATK)",
                                                "scale": "BS-16",
                                                "posting": "ATTOCK"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "designation": "Assistant Director JEHLUM",
                                "shortform": "AD(JLM)",
                                "scale": "Bs-17",
                                "posting": "JEHLUM",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent JEHLUM",
                                        "shortform": "Suprintendent(JLM)",
                                        "scale": "BS-17",
                                        "posting": "JEHLUM",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant JEHLUM",
                                                "shortform": "Assistant(JLM)",
                                                "scale": "BS-16",
                                                "posting": "JEHLUM"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "designation": "Deputy Director SARGODHA",
                        "shortform": "DD(SRG)",
                        "scale": "Bs-18",
                        "posting": "SARGODHA",
                        "subordinates": [
                            {
                                "designation": "Assistant Director SARGODHA",
                                "shortform": "AD(SRG)",
                                "scale": "Bs-17",
                                "posting": "SARGODHA",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent SARGODHA",
                                        "shortform": "Suprintendent(SRG)",
                                        "scale": "BS-17",
                                        "posting": "SARGODHA",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant SARGODHA",
                                                "shortform": "Assistant(SRG)",
                                                "scale": "BS-16",
                                                "posting": "SARGODHA"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "designation": "Assistant Director CHINIOT",
                                "shortform": "AD(CHT)",
                                "scale": "Bs-17",
                                "posting": "CHINIOT",
                                "subordinates": [
                                    {
                                        "designation": "Suprintendent CHINIOT",
                                        "shortform": "Suprintendent(CHT)",
                                        "scale": "BS-17",
                                        "posting": "CHINIOT",
                                        "subordinates": [
                                            {
                                                "designation": "Assistant CHINIOT",
                                                "shortform": "Assistant(CHT)",
                                                "scale": "BS-16",
                                                "posting": "CHINIOT"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "designation": "Deputy Director GUJRANWALA",
                                "shortform": "DD(GRW)",
                                "scale": "Bs-18",
                                "posting": "GUJRANWALA",
                                "subordinates": [
                                    {
                                        "designation": "Assistant Director GUJRANWALA",
                                        "shortform": "AD(GRW)",
                                        "scale": "Bs-17",
                                        "posting": "GUJRANWALA",
                                        "subordinates": [
                                            {
                                                "designation": "Suprintendent GUJRANWALA",
                                                "shortform": "Suprintendent(GRW)",
                                                "scale": "BS-17",
                                                "posting": "GUJRANWALA",
                                                "subordinates": [
                                                    {
                                                        "designation": "Assistant GUJRANWALA",
                                                        "shortform": "Assistant(GRW)",
                                                        "scale": "BS-16",
                                                        "posting": "GUJRANWALA"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "designation": "Deputy Director Lahore Region",
                                "shortform": "DD(LHR)",
                                "scale": "Bs-18",
                                "posting": "Lahore Region",
                                "subordinates": [
                                    {
                                        "designation": "Assistant Director Lahore Region | AD(LHR)",
                                        "scale": "Bs-17",
                                        "posting": "Lahore Region",
                                        "subordinates": [
                                            {
                                                "designation": "Suprintendent Lahore Region",
                                                "shortform": "Suprintendent(LHR)",
                                                "scale": "BS-17",
                                                "posting": "Lahore Region",
                                                "subordinates": [
                                                    {
                                                        "designation": "Assistant Lahore Region",
                                                        "shortform": "Assistant(LHR)",
                                                        "scale": "BS-16",
                                                        "posting": "Lahore Region"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "designation": "Assistant Director SIALKOT",
                                        "shortform": "AD(SLK)",
                                        "scale": "Bs-17",
                                        "posting": "SIALKOT",
                                        "subordinates": [
                                            {
                                                "designation": "Suprintendent SIALKOT",
                                                "shortform": "Suprintendent(SLK)",
                                                "scale": "BS-17",
                                                "posting": "SIALKOT",
                                                "subordinates": [
                                                    {
                                                        "designation": "Assistant SIALKOT",
                                                        "shortform": "Assistant(SLK)",
                                                        "scale": "BS-16",
                                                        "posting": "SIALKOT"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "designation": "Assistant Director SAHIWAL",
                                        "shortform": "AD(SWL)",
                                        "scale": "Bs-17",
                                        "posting": "SAHIWAL",
                                        "subordinates": [
                                            {
                                                "designation": "Suprintendent SAHIWAL",
                                                "shortform": "Suprintendent(SWL)",
                                                "scale": "BS-17",
                                                "posting": "SAHIWAL",
                                                "subordinates": [
                                                    {
                                                        "designation": "Assistant SAHIWAL",
                                                        "shortform": "Assistant(SWL)",
                                                        "scale": "BS-16",
                                                        "posting": "SAHIWAL"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "designation": "Deputy Director Large Scale Mining",
                "shortform": "DD(LSM)",
                "scale": "Bs-18",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Assistant Director EL | AD EL",
                        "scale": "Bs-17",
                        "posting": "Head Quarters",
                        "subordinates": [
                            {
                                "designation": "Suprintendent Large Scale Mining | Suprintendent LSM",
                                "scale": "Bs-17",
                                "posting": "Head Quarters"
                            }
                        ]
                    },
                    {
                        "designation": "Assistant Director ML | AD ML",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    }
                ]
            },
            {
                "designation": "Assistant Director Appeal | AD Appeal",
                "scale": "Bs-17",
                "posting": "Head Quarters",
                "subordinates": [
                    {
                        "designation": "Superintendent Appeal",
                        "scale": "Bs-17",
                        "posting": "Head Quarters"
                    }
                ]
            }
        ]
    }
];
function createNode(node) {
    const container = document.createElement('div');
    container.className = 'relative border rounded-xl p-4 bg-white shadow-md m-2';
    const title = document.createElement('div');
    title.className = 'font-bold text-blue-700';
    const titleText = node.shortform
        ? `${node.designation} (${node.shortform}) (${node.scale})`
        : `${node.designation} (${node.scale})`;
    title.textContent = titleText;
    const posting = document.createElement('div');
    posting.className = 'text-sm text-gray-600';
    posting.textContent = `Posting: ${node.posting}`;
    container.appendChild(title);
    container.appendChild(posting);
    if (Array.isArray(node.subordinates) && node.subordinates.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'ml-6 mt-2 flex flex-col';
        // Add a connecting line element
        const connector = document.createElement('div');
        connector.className = 'absolute left-0 top-1/2 h-1/2 w-6 border-t border-l border-gray-300';
        container.appendChild(connector);
        node.subordinates.forEach((child) => {
            childrenContainer.appendChild(createNode(child));
        });
        container.appendChild(childrenContainer);
    }
    return container;
}
const root = document.getElementById('app');
if (root) {
    root.innerHTML = '';
    fullOrganogram.forEach((topLevelNode) => {
        root.appendChild(createNode(topLevelNode));
    });
}
else {
    console.error('Root element not found.');
}
