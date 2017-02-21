var moneyTransferOptions = {

};

var userOptions = {
    "Konto geht gegen Grenzwert 0": {
        "Dispo erhöhen": {
            "Soll das Dispo Limit um den Betrag 1000€ erhöht werden?": [
                "Ja",
                "Nein"
            ]
        },
        "Geldtranfer / Überweisung": {
            "Von Welchem Konto soll Geld überwiesen werden?": {
                "Girokonto": moneyTransferOptions,
                "Tagesgeldkonto": moneyTransferOptions,
                "Sparkonto": moneyTransferOptions,
                "Fremdbank": "Bitte auf den Kundenberater zugehen"
            }
        },
        "Umschuldung auf Ratenkredit": {
            "Deine voraussichtlichen Ausgaben bis zum nächsten Geldeingang betragen 300€. Möchtest du über diesen Betrag einen Ratenkredit aufnehmen?": [
                "Ja",
                "anderen Betrag wählen",
                "zurück zur Auswahl"
            ]

        },
        "persönliche Beratung": [
            "Telefonnummer des Bankberaters anzeigen [ANRUFEN]",
            "Chat öffnen",
            "Um Rückruf bitten",
            "zurück zur Auswahl"            
        ]
    },
    "Kredikartenlimit überschritten": {

    }
};