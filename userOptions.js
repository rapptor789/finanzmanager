var moneyTransferOptions = {
    "200 €":  {
        "type": "end"
    },
    "300 €": {
        "type": "end"
    },
    "Betrag eingeben": {
        "type": "number" 
    }
};

exports.userOptions = {
    "Konto geht gegen Grenzwert 0": {
        "type": "options",
        "values": {
            "Dispo erhöhen": {
                "type": "options",
                "values": {
                    "Soll das Dispo Limit um den Betrag 1000€ erhöht werden?": { 
                        "type": "options",
                        "values": {
                            "Ja":  {
                                "type": "end"
                            },
                            "Nein": {
                                "type": "end"
                            }
                        }
                    }
                }
            },
            "Geldtranfer / Überweisung": {
                "type": "flow",
                "values": {
                    "Von Welchem Konto soll Geld überwiesen werden?": { 
                        "type": "options",
                        "values": {
                            "Girokonto": {
                                "type": "options",
                                "values": moneyTransferOptions
                            },
                            "Tagesgeldkonto": {
                                "type": "options",
                                "values": moneyTransferOptions
                            },
                            "Sparkonto": {
                                "type": "options",
                                "values": moneyTransferOptions
                            },
                            "Fremdbank": {
                                "type": "end",
                                "values": "Bitte auf den Kundenberater zugehen"
                            }
                        }
                    }
                }
            },
            "Umschuldung auf Ratenkredit": {
                "type": "flow",
                "values": {
                    "Deine voraussichtlichen Ausgaben bis zum nächsten Geldeingang betragen 300€. Möchtest du über diesen Betrag einen Ratenkredit aufnehmen?": { 
                        "type": "options",
                        "values": {
                            "Ja": {
                                "type": "end"
                            },
                            "Betrag eingeben": {
                                "type": "number" 
                            }
                        }
                    }
                }
            },
            "persönliche Beratung": {
                "type": "options",
                "values": {
                    "Telefonnummer des Bankberaters anzeigen [ANRUFEN]": { 
                        "type": "end"
                    },
                    "Chat öffnen": { 
                        "type": "end"
                    },
                    "Um Rückruf bitten": { 
                        "type": "end"
                    }
                }
            }          
        }
    },
    "Kredikartenlimit überschritten": {
        "type": "end"
    }
};
