import Webiny from 'Webiny';

class AddServiceModal extends Webiny.Ui.ModalComponent {

    constructor() {
        super();
        this.api = new Webiny.Api.Endpoint('/services/webiny/services');
    }

    renderDialog() {
        const {Modal, Form, Grid, Select, Button} = this.props;

        return (
            <Modal.Dialog>
                {dialog => (
                    <Form
                        onSubmit={async (model, form) => {
                            form.showLoading();
                            const query = {
                                withDetails: true,
                                service: model.class
                            };

                            const apiResponse = await this.api.setQuery(query).get();

                            form.hideLoading();
                            await dialog.hide();

                            this.props.onSubmit(apiResponse.getData());
                        }}>
                        {(model, form) => (
                            <Modal.Content>
                                <Modal.Header title="Add entity" onClose={dialog.hide}/>
                                <Modal.Body>
                                    <Grid.Row>
                                        <Grid.Col all={12}>
                                            <Form.Error/>
                                            <Form.Loader/>
                                            <Select
                                                placeholder={this.i18n('Select entity...')}
                                                name="class"
                                                validate="required"
                                                api="/services/webiny/services"
                                                query={{exclude: this.props.exclude.map(item => item.class)}}
                                                valueAttr="class"
                                                textAttr="class"
                                                minimumResultsForSearch={10}/>
                                        </Grid.Col>
                                    </Grid.Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button label="Cancel" onClick={this.hide}/>
                                    <Button type="primary" label="Add" onClick={form.submit}/>
                                </Modal.Footer>
                            </Modal.Content>
                        )}
                    </Form>
                )}
            </Modal.Dialog>
        );
    }
}

AddServiceModal.defaultProps = _.assign({}, Webiny.Ui.ModalComponent.defaultProps, {
    onSubmit: _.noop,
    exclude: []
});

export default Webiny.createComponent(AddServiceModal, {
    modules: ['Modal', 'Form', 'Grid', 'Select', 'Button']
});