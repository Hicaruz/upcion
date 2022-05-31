import { FC, useState, useEffect } from 'react'

import {  User } from '../core/_models'
import clsx from 'clsx'

import moment from "moment"
import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
  isUserLoading: boolean
  user: User
}



const UserEditModalForm: FC<Props> = () => {

  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) {
      return
    }

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }, [copied])




  const getUrl = window.location;
  const baseUrl = getUrl.protocol + "//" + getUrl.host 
  const url = baseUrl+"/form?time=" + moment().format("DDMMYYYYHHmmss")
  return (
    <>
      <div id='kt_modal_add_user_form' className='form'>
        {/* begin::Scroll */}
        <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_user_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_user_header'
          data-kt-scroll-wrappers='#kt_modal_add_user_scroll'
          data-kt-scroll-offset='300px'
        >
          {/* begin::Input group */}
          <div className='fv-row mb-7'>
            {/* begin::Label */}
            <label className=' fw-bold fs-6 mb-2'>URL</label>
            {/* end::Label */}

            {/* begin::Input */}
            <input
              value={url}
              type='text'
              name='name'
              className={clsx('form-control form-control-solid mb-3 mb-lg-0')}
              autoComplete='off'
            />
         
            {/* end::Input */}
          </div>

        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-15'>
        <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
              <span className='highlight-copy btn btn-light'>{copied ? 'Copiado' : 'Copiar'}</span>
            </CopyToClipboard>


        </div>
        {/* end::Actions */}
      </div>
    </>
  )
}

export { UserEditModalForm }
