import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Consulting, mapDispatchToProps } from './Consulting';
import { products, enterprise, consulting } from '../test-mock/mock';
import cms from '../../shared/cms.json';

/**
 * Test for Menu component
 *
 * @version        1.0.0 - 03 May 2019
 * @author         Jorge Romero - Jorgeddrv@gmail.com
 * @since          1.0.0 - 03 May 2019
 *
 */
configure({ adapter: new Adapter() });

const getEventTarget = (value, name, label) => {
    return {
        target: {
            value: value, name: name
        }, additionalProps: {
            object: {
                label: label
            }
        }
    }
};

describe('Consulting renders without crashing', () => {
    const consultDetails = {data: {product_code: 'LCI', event_code: 'MOD'}};

	it('Consulting render', () => {
        const dummyFn = jest.fn();
		const props = {
            getEnterprise: () => ({ then: (response) => response(enterprise) }),
            getConsultDocuments: () => ({ then: (response) => response(enterprise) }),
            getConsulting: () => ({ then: (response) => response(consulting) }),
            getConsultDetails: ()=> ({ then: (response) => response(consultDetails) }),
            getProducts: ()=> ({ then: (response) => response(products) }),
            getConsultingPdf: ()=> ({ then: (response) => response({}) }),
            enterprise: enterprise,
            products: products,
            consulting: consulting,
            cms: cms
        }

        const wrapper = shallow(<Consulting {...props} />);
        wrapper.instance().modal = {
			current: { onOpen: dummyFn, onClose: dummyFn}
        };
        wrapper.instance().modalDocuments = {
			current: { onOpen: dummyFn, onClose: dummyFn}
		};
		wrapper.instance().headerSection();
		wrapper.instance().startInitDate();
		wrapper.instance().startEndDate();
        wrapper.instance().getProductsList();
        wrapper.instance().handlerOnChangeEnterprise('19')
        wrapper.instance().handlerOnClickDetail({});
        wrapper.instance().productChangeHandler(
            getEventTarget('CC', 'Credito Comercial', 'Credito Comercial')
        );

        wrapper.instance().eventChangeHandler(
            getEventTarget('APE', 'Apertura', 'Apertura')
        );

        wrapper.instance().currencyChangeHandler(
            getEventTarget('USD', 'USD', 'USD')
        );

        wrapper.instance().startDateChangeHandler(new Date());
        wrapper.instance().endDateChangeHandler(new Date());
        wrapper.instance().consultingClickHandler();

        wrapper.instance().validateForm();

        wrapper.instance().setState({
            product: null,
            event: 'APE',
            currecy: 'USD',
            labellink: '',
            productSelected: 'LCI',
            eventSelected: 'APE'
        });
        wrapper.instance().validateForm();

        wrapper.instance().setState({
            product: 'CC',
            event: null,
            currecy: 'USD'
        });
        wrapper.instance().validateForm();

        wrapper.instance().setState({
            product: 'CC',
            event: 'APE',
            currecy: null
        });
        wrapper.instance().validateForm();

        wrapper.instance().setState({
            product: 'CC',
            event: 'APE',
            currecy: 'USD'
		});
        wrapper.instance().validateForm();

		wrapper.instance().searchChangeHandler(
            getEventTarget('oto', 'search', 'Otorgamiento'),
            consulting.data.operation_comex
        );

        wrapper.instance().searchChangeHandler(
            getEventTarget('oto', 'search', 'Otorgamiento'),
            []
        );

        wrapper.instance().searchChangeHandler(
            getEventTarget('oto', 'search', 'Otorgamiento'),
            undefined
        );

        wrapper.instance().onBackHandler()
        wrapper.instance().onClosedIconModalHandler();
        wrapper.instance().onClosedModalHandler();
        wrapper.instance().handlerOnClickLinkModal('legal_bases');
        wrapper.instance().handlerOnBackModalMain();
        wrapper.instance().handlerOnBackMenuMobile();
        wrapper.instance().handlerOnClickMenuMobile(true);
        wrapper.instance().setActiveTab(1);
        wrapper.instance().validateNotice('LCI', 'MOD');
        wrapper.instance().validateNotice('LCI', 'APE');
        wrapper.instance().handlerOnClickPdf({
            event_date: '2019-02-01',
			product_code: 'LCI',
			event_code: 'MOD',
			operation_number: 45678
        }, true);
        wrapper.instance().handlerOnClickPdf({
            event_date: '2019-02-01',
			product_code: 'LCI',
			event_code: 'MOD',
			operation_number: 45678
        }, false);
        wrapper.instance().clearState();
        wrapper.instance().handlerOnClickDocuments({
            event_date: '2019-02-01',
			product_code: 'LCI',
			event_code: 'MOD',
            operation_number: 45678,
            event_type: 'M'
        }, 'A');
        wrapper.instance().handlerOnClickDocuments({
            event_date: '2019-02-01',
			product_code: 'LCI',
			event_code: 'MOD',
            operation_number: 45678,
            event_type: 'M'
        }, 'S');
        wrapper.instance().onClosedModalDocumentsHandler();
        wrapper.instance().footerDocumentsModal();
        wrapper.instance().bodyDocumentsModal();
    });

    it('Consulting mapDispatchToProps', () => {
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).getConsulting({});
        mapDispatchToProps(dispatch).getProducts({});
        mapDispatchToProps(dispatch).getConsultDetails({});
        mapDispatchToProps(dispatch).changeToken({});
    });

});