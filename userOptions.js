var moneyTransferOptions = {

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
                "type": "options",
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
            }/*,
            2 = {
                "type": "options",
                "title": "Umschuldung auf Ratenkredit",
                "values": [
                    0 = { 
                        "type": "options",
                        "title": "Deine voraussichtlichen Ausgaben bis zum nächsten Geldeingang betragen 300€. Möchtest du über diesen Betrag einen Ratenkredit aufnehmen?",
                        "values": [
                            0 = {
                                "type": "end",
                                "title": "Ja"
                            },
                            1 = {
                                "type": "number",
                                "title": "anderen Betrag wählen"
                            }
                        ]
                    }
                ]
            },
            3 = {
                "type": "options",
                "title": "persönliche Beratung",
                "values": [
                    0 = { 
                        "type": "end",
                        "title": "Telefonnummer des Bankberaters anzeigen [ANRUFEN]",
                    },
                    1 = { 
                        "type": "end",
                        "title": "Chat öffnen",
                    },
                    2 = { 
                        "type": "end",
                        "title": "Um Rückruf bitten",
                    }
                ]
            }*/      
            
            
        }
    },
    "Kredikartenlimit überschritten": {
        "type": "end"
    }
};
