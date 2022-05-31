import React, { FC } from 'react'
import { Field, ErrorMessage } from 'formik'

const Step2: FC = () => {



  return (
    <div className='w-100'>

      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Monto a Invertir</label>

            <Field name='amount' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='amount' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Plazo de Inversion</label>

            <Field disabled name='time' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='time' />
            </div>
          </div>
        </div>
      </div>

      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Entidad Bancaria</label>

            <Field name='bank' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='bank' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Interes Mensual</label>

            <Field disabled name='interest' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='interest' />
            </div>
          </div>
        </div>
      </div>

      <div className='fv-row mb-10'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>No. Cuenta Bancaria</label>

            <Field name='bank_account' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='bank_account' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <label className='form-label required'>Tipo de Cuenta</label>

            <Field name='bank_account_type' className='form-control form-control-lg form-control-solid' />
            <div className='text-danger mt-2'>
              <ErrorMessage name='bank_account_type' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { Step2 }
