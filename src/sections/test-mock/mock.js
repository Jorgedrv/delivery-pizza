export const products =
{
    'product': [
        {
            'code': 'CC',
            'name': 'Credito Comercial',
            'events': [
                {
                    'code': 'APE',
                    'name': 'Apertura'
                },
                {
                    'code': 'OTO',
                    'name': 'Otorgamiento'
                }
            ],
            'notification': [
                {
                    'code': 'swift',
                    'name': 'swift'
                }
            ],
            "currencies": [
                {
                    "code": "",
                    "name": "Todas"
                },
                {
                    "code": "DKK",
                    "name": "Corona Danesa"
                },
                {
                    "code": "SEK",
                    "name": "Corona Sueca"
                },
                {
                    "code": "CAD",
                    "name": "Dolar Canadiense"
                },
                {
                    "code": "USD",
                    "name": "Dolar USA"
                },
                {
                    "code": "EUR",
                    "name": "Euro"
                },
                {
                    "code": "CHF",
                    "name": "Franco Suizo"
                },
                {
                    "code": "GBP",
                    "name": "Libra Esterlina"
                },
                {
                    "code": "JPY",
                    "name": "Yen"
                }
            ]
        },
        {
            'code': 'OPE',
            'name': 'Ordenes de Pago Enviadas',
            'events': [
                {
                    'code': 'ENV',
                    'name': 'Enviada'
                }
            ],
            "currencies": [
                {
                    "code": "",
                    "name": "Todas"
                },
                {
                    "code": "DKK",
                    "name": "Corona Danesa"
                },
                {
                    "code": "SEK",
                    "name": "Corona Sueca"
                },
                {
                    "code": "CAD",
                    "name": "Dolar Canadiense"
                },
                {
                    "code": "USD",
                    "name": "Dolar USA"
                },
                {
                    "code": "EUR",
                    "name": "Euro"
                },
                {
                    "code": "CHF",
                    "name": "Franco Suizo"
                },
                {
                    "code": "GBP",
                    "name": "Libra Esterlina"
                },
                {
                    "code": "JPY",
                    "name": "Yen"
                }
            ],
            'notification': [
                {
                    'code': 'swift',
                    'name': 'swift'
                }
            ]
        }
    ]
};

export const enterprise =
    [
        {
            'name': 'RAUL SILVA HENR',
            'key': '719122000'
        },
        {
            'name': 'UNIVERSIDAD CATOLICA CARDENAL RAUL SILVA HENR',
            'key': '719122001'
        }
    ];

export const consulting = {
    'data': {
        'operation_comex': [
            {
                'solution_number': '',
                'event_date': '2019-01-02',
                'product_code': 'PAE',
                'event_code': 'OTO',
                'operation_number': '609087',
                'customer_reference': '1212121',
                'beneficiary_name': 'enmascarado',
                'currency_code': 'USD',
                'operation_amount': 10000.00,
                'event_type': 'M',
                'key_pag': '924'
            },
            {
                'solution_number': '',
                'event_date': '2019-01-03',
                'product_code': 'PAE',
                'event_code': 'OTO',
                'operation_number': '609096',
                'customer_reference': '',
                'beneficiary_name': 'enmascarado',
                'currency_code': 'USD',
                'operation_amount': 123123.00,
                'event_type': 'M',
                'key_pag': '925'
            },
            {
                'solution_number': '',
                'event_date': '2019-01-04',
                'product_code': 'PAE',
                'event_code': 'PRO',
                'operation_number': '609097',
                'customer_reference': 'TEST',
                'beneficiary_name': 'enmascarado',
                'currency_code': 'USD',
                'operation_amount': 150150.00,
                'event_type': 'M',
                'key_pag': '928'
            },
            {
                'solution_number': '',
                'event_date': '2019-01-05',
                'product_code': 'CIM',
                'event_code': 'RDO',
                'operation_number': '609097',
                'customer_reference': 'TEST',
                'beneficiary_name': 'enmascarado',
                'currency_code': 'USD',
                'operation_amount': 150150.00,
                'event_type': 'M',
                'key_pag': '928'
            }
        ]
    }
};

export const swift = {
	OPR: ['REC', 'LIQ'],
	OPE: ['ENV'],
	CEX: [],
	CIM: ['RDO', 'PAG'],
	PAE: [],
	CC: [],
	FC: [],
	LEX: [],
	LCI: ['APE', 'NEG', 'PAG']
}
