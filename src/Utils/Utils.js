import React from 'react';
import './Utils.css';

export function Hyph() {
    return <span className='Hyph'>{' - '}</span>
  }
  
  export function Button({ className, ...props }) {
    return <button className={['Button', className].join(' ')} {...props} />
  }
  
  export function Textarea({ className, ...props }) {
    return (
      <textarea className={['Textarea', className].join(' ')} {...props} />
    )
  }
  
  export function Input({ className, ...props }) {
    return (
      <input className={['Input', className].join(' ')} {...props} />
    )
  }
  
  export function Required({ className, ...props }) {
    return (
      <span className={['Required', className].join(' ')} {...props}>
        &#42;
      </span>
    )
  }
  
  export function Section({ className, list, ...props }) {
    const classes = [
      'Section',
      list && 'Section--list',
      className,
    ].filter(Boolean).join(' ')
    return (
      <section className={classes} {...props} />
    )
  }

  export function ServiceChoice() {
    return (
      <div className='serviceChoice'>
        <label htmlFor='RegistrationForm_services'>
          Service Provided
        </label>
        <select id='serviceChoice' name='serviceChoice'>
          <option value='...'>...</option>
          <option value='Mechanic'>Mechanic</option>
          <option value='Plumbing'>Plumbing</option>
          <option value='House Remodle'>House Remodel</option>
          <option value='Lawnscaping'>Lawnscaping</option>
          <option value='Travel'>Travel</option>
          <option value='Hair Stylist'>Hair Stylist</option>
          <option value='Employment'>Employment</option>
          <option value='Phone Repair'>Phone Repair</option>
        </select>
      </div>
    )
  }

  export function displayPhone(service) {
    if (service.phone) {
      const phone = service.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
        return (
            <span className='notBold phone'>
                {phone}
            </span>
        ) 
    }
    return null
}