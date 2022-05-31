import React, { FC, useEffect, useRef, useState } from 'react'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'
import { KTSVG, toAbsoluteUrl } from '../../../../_metronic/helpers'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { Formik, Form, FormikValues } from 'formik'
import { createAccountSchemas, ICreateAccount, inits } from './CreateAccountWizardHelper'
import axios from 'axios'

import generatePDF from "./generatePDF"

const Horizontal: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [isSubmitButton, setSubmitButton] = useState(false)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = async (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }



    setSubmitButton(stepper.current.currentStepIndex === stepper.current.totatStepsNumber! - 1)

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])



    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      const url = "https://us-central1-one-behavior.cloudfunctions.net/api/v1/users/create"
      const res = await axios.post(url, values)


      console.log(res.data, values)
      //

      //generate pdf download
      generatePDF(values)


      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='container pt-5'>
      <img alt='Logo' src={toAbsoluteUrl('/media/logos/favicon.png')} className='h-30px mb-5' />

      <div className='card'>
        <div className='card-body'>
          <div
            ref={stepperRef}
            className='stepper stepper-links d-flex flex-column pt-15'
            id='kt_create_account_stepper'
          >
            <div className='stepper-nav mb-5'>
              <div className='stepper-item current' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>PERFIL CLIENTE</h3>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>DATOS DE INVERSION</h3>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>PERFIL DE BENEFICIARO</h3>
              </div>

              {/* <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Billing Details</h3>
              </div>

              <div className='stepper-item' data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>Completed</h3>
              </div> */}
            </div>

            <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
              {() => (
                <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
                  <div className='current' data-kt-stepper-element='content'>
                    <Step3 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step2 />
                  </div>

                  <div data-kt-stepper-element='content'>
                    <Step4 />
                  </div>

                  <div className='d-flex flex-stack pt-15'>
                    <div className='mr-2'>
                      <button
                        onClick={prevStep}
                        type='button'
                        className='btn btn-lg btn-light-primary me-3'
                        data-kt-stepper-action='previous'
                      >
                        <KTSVG
                          path='/media/icons/duotune/arrows/arr063.svg'
                          className='svg-icon-4 me-1'
                        />
                        Regresar
                      </button>
                    </div>

                    <div>
                      <button type='submit' className='btn btn-lg btn-primary me-3'>
                        <span className='indicator-label'>
                          {!isSubmitButton && 'Continuar'}
                          {isSubmitButton && 'Subir'}
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-3 ms-2 me-0'
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>

  )
}

export { Horizontal }
