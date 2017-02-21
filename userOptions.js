var moneyTransferOptions = {

};

exports.userOptions = [
    {
        "type": "options",
        "title": "Konto geht gegen Grenzwert 0",
        "values": [
            {
                "type": "options",
                "title": "Dispo erhöhen",
                "values": [
                    { 
                        "type": "options",
                        "title": "Soll das Dispo Limit um den Betrag 1000€ erhöht werden?",
                        "values": [
                            {
                                "type": "end",
                                "title": "Ja"
                            },
                            {
                                "type": "end",
                                "title": "Nein"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "options",
                "title": "Geldtranfer / Überweisung",
                "values": [
                    { 
                        "type": "options",
                        "title": "Von Welchem Konto soll Geld überwiesen werden?",
                        "values": [
                            {
                                "type": "options",
                                "title": "Girokonto",
                                "values": moneyTransferOptions
                            },
                            {
                                "type": "options",
                                "title": "Tagesgeldkonto",
                                "values": moneyTransferOptions
                            },
                            {
                                "type": "options",
                                "title": "Sparkonto",
                                "values": moneyTransferOptions
                            },
                            {
                                "type": "end",
                                "title": "Fremdbank",
                                "values": "Bitte auf den Kundenberater zugehen"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "options",
                "title": "Umschuldung auf Ratenkredit",
                "values": [
                    { 
                        "type": "options",
                        "title": "Deine voraussichtlichen Ausgaben bis zum nächsten Geldeingang betragen 300€. Möchtest du über diesen Betrag einen Ratenkredit aufnehmen?",
                        "values": [
                            {
                                "type": "end",
                                "title": "Ja"
                            },
                            {
                                "type": "number",
                                "title": "anderen Betrag wählen"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "options",
                "title": "persönliche Beratung",
                "values": [
                    { 
                        "type": "end",
                        "title": "Telefonnummer des Bankberaters anzeigen [ANRUFEN]",
                    },
                    { 
                        "type": "end",
                        "title": "Chat öffnen",
                    },
                    { 
                        "type": "end",
                        "title": "Um Rückruf bitten",
                    }
                ]
            }      
            
            
        ]
    },
    {
        "type": "end",
        "title": "Kredikartenlimit überschritten"
    }
];
