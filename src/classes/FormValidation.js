/**
 *  Для того, чтобы включить валидацию поля, необходимо добавить полю аттрибут
 *  data-required="empty name"
 *  Содержимое поля - названия методов валидации которые бдут к нему приенены.
 *  Количество валидаций не ограниченно,методы валидация применяются последовательно.
 */

export default class FormValidation {

    /**
     *
     * @param id - атрибут id формы
     * @param errMsg - приватное свойство
     * @param frameWork
     */
    constructor (id, errMsg = false, frameWork = undefined) {
        this.frameWork = frameWork;
        this.formObj = $('form#'+id);
        this.errTextMessage = {
            empty: 'Пожалуйста заполните поле!',
            email: 'Пожалуйста введите корректный email аддрес',
            phone: 'Пожалуйста введите корректный номер телефона'
        };
        this.errFields = {};
        this.resultValidation;
        this.outputResult();
    }


    /**
     * output result validation after ajax
     * @param res
     */
    outputResult() {
        if (this.validate())
        {
            this.clearOutputResult();
            //this.resetForm();
            this.resultValidation = true;
        }
        else
        {
            this.clearOutputResult();
            for (let val in this.errFields) {

                this.setError(this.errFields[val]['dom']);
            }
            this.errMessage();
            this.resultValidation = false;
        }
    }
    
    /**
     *  clear result validation
     */
    clearOutputResult () {
        this.formObj.find('.'+this.errorClass()).removeClass(this.errorClass());
    }

    /**
     * сброс формы
     */
    resetForm() {
        this.formObj.resetForm();
    }


    /**
     * valid empty
     */
    validEmpty(el) {
        if (el.val() == '')
        {
            this.setError(el);
            return 1;
        }
        else return 0;
    }

    /**
     * valid email
     */
    validEmail(el) {
        var res = 0;
        if (el.val() != '') {

            if (!el.val().match(/..+@.+\..+/)) {
                this.setError(el);
                res = 1;
            }
            else res = 0;
        } else res = 0;
        return res;
    }

    /**
     * valid phone
     */
    validPhone(el) {
        var res = 0;
        if (el.val() != '') {

            if (!el.val().match(/^\d+$/)) {
                this.setError(el);
                res = 1;
            }
            else res = 0;
        } else res = 0;
        return res;
    }
    
    /**
     *
     * cnt validation
     * @param formData
     */
    validate() {
        this.formObj.find(this.errorClass).removeClass(this.errorClass);
        let err = 0;
        $(this.formObj).find('input,select,textarea').each((i,field) => {
            
            field = $(field);
            let fieldValid = field.attr('data-required');
            let fieldName = field.attr('type');
            this.errFields[fieldName] = {};
            /* если у поля есть атрибут data-required, то валидируем */
            if (fieldValid !== undefined) {
                let fieldValidArr = field.attr('data-required').split(' ');

                fieldValidArr.forEach((item, i, arr)=>{
                    switch (item) {
                        case 'empty':
                        {
                            if (this.validEmpty(field)) {
                                this.errFields[fieldName].text = this.errTextMessage['empty'];
                                this.errFields[fieldName].dom = field;
                                err += this.validEmpty(field);
                            }
                            break;
                        }
                        case 'phone':
                            if (this.validPhone(field)) {
                                this.errFields[fieldName].text = this.errTextMessage[fieldName];
                                this.errFields[fieldName].dom = field;
                                err += this.validPhone(field);
                            }
                            break;
                        case 'email':
                            if (this.validEmail(field)) {
                                this.errFields[fieldName].text = this.errTextMessage[fieldName];
                                this.errFields[fieldName].dom = field;
                                err += this.validEmail(field);
                            }
                            break;
                    }
                });
            }
        });
        if (err>0) return false;
        else return true;
    }
    
    /**
     *  add class "error" for element's form
     *  @param el = object date form
     */
    setError(el) {
        if (typeof this.frameWork == 'undefined') {
            $(el).addClass(this.errorClass());
        }
        else if(this.frameWork == 'bootstrap')
            $(el).closest('.form-group').addClass(this.errorClass());
    }

    /**
     * Функция вывода сообщений об ошибках
     * @param errObj - объект с ошибками
     */
    errMessage() {
        if (this.errFields){
            this.formObj.find('.control-label').remove();
            for (let nameField in this.errFields)
            {
                var span = $("<span/>", {
                    text: this.errFields[nameField]['text'],
                    class: 'control-label'
                }).css({
                    fontSize: '10px',
                    fontWeight: 'bold'
                });
                $(this.errFields[nameField]['dom']).after(span);
            }
        }
    }

    /**
     * Определение названия класса ошибки от типа фреймворка
     * @returns {string} - название класса
     */
    errorClass() {
        var nameClass = '';
        if (typeof this.frameWork == 'undefined') nameClass = 'error';
        else if(this.frameWork == 'bootstrap') nameClass = 'has-error';
        return nameClass;
    }

 
}
