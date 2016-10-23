import React from 'react'
import FieldLabel from './FieldLabel/FieldLabel'

class SelectField extends React.Component {
  render() {
    const options = this.props.options
    const emptyLabel = this.props.emptyLabel || 'Select one...'
    const valueKey = this.props.valueKey || 'value'
    const labelKey = this.props.labelKey || 'label'

    return(
      <div className='form-group'>
        {this.props.title && <FieldLabel>{this.props.title}</FieldLabel>}
        <select className='form-control' {...this.props.fieldProps}>
          {!this.props.skipEmpty && <option value=''>{emptyLabel}</option>}

          {options.map((option) =>
            <option value={option[valueKey]} key={option[valueKey]}>
              {option[labelKey]}
            </option>)}
        </select>

        {this.props.hint && <span className='help-block'>{this.props.hint}</span>}
      </div>
    )
  }
}

export default SelectField