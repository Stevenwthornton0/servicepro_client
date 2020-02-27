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

export function States() {
  return (
  <select id="state" name="state" className='state' required>
      <option value="">---</option>
      <option value="Alabama">Alabama</option>
      <option value="Alaska">Alaska</option>
      <option value="Arizona">Arizona</option>
      <option value="Arkansas">Arkansas</option>
      <option value="California">California</option>
      <option value="Colorado">Colorado</option>
      <option value="Connecticut">Connecticut</option>
      <option value="Delaware">Delaware</option>
      <option value="District of Columbia">District of Columbia</option>
      <option value="Florida">Florida</option>
      <option value="Georgia">Georgia</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Idaho">Idaho</option>
      <option value="Illinois">Illinois</option>
      <option value="Indiana">Indiana</option>
      <option value="Iowa">Iowa</option>
      <option value="Kansas">Kansas</option>
      <option value="Kentucky">Kentucky</option>
      <option value="Louisiana">Louisiana</option>
      <option value="Maine">Maine</option>
      <option value="Maryland">Maryland</option>
      <option value="Massachusetts">Massachusetts</option>
      <option value="Michigan">Michigan</option>
      <option value="Minnesota">Minnesota</option>
      <option value="Mississippi">Mississippi</option>
      <option value="Missouri">Missouri</option>
      <option value="Montana">Montana</option>
      <option value="Nebraska">Nebraska</option>
      <option value="Nevada">Nevada</option>
      <option value="New Hampshire">New Hampshire</option>
      <option value="New Jersey">New Jersey</option>
      <option value="New Mexico">New Mexico</option>
      <option value="New York">New York</option>
      <option value="North Carolina">North Carolina</option>
      <option value="North Dakota">North Dakota</option>
      <option value="Ohio">Ohio</option>
      <option value="Oklahoma">Oklahoma</option>
      <option value="Oregon">Oregon</option>
      <option value="Pennsylvania">Pennsylvania</option>
      <option value="Rhode Island">Rhode Island</option>
      <option value="South Carolina">South Carolina</option>
      <option value="South Dakota">South Dakota</option>
      <option value="Tennessee">Tennessee</option>
      <option value="Texas">Texas</option>
      <option value="Utah">Utah</option>
      <option value="Vermont">Vermont</option>
      <option value="Virginia">Virginia</option>
      <option value="Washington">Washington</option>
      <option value="West Virginia">West Virginia</option>
      <option value="Wisconsin">Wisconsin</option>
      <option value="Wyoming">Wyoming</option>
  </select>
  )
}