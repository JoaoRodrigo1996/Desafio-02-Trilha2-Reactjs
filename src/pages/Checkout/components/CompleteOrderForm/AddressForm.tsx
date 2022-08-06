import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'

interface ErrorTypes {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorTypes

  return (
    <AddressFormContainer>
      <Input
        className="cep"
        placeholder="CEP"
        type="number"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        className="street"
        placeholder="Rua"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        className="number"
        placeholder="Número"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        className="complement"
        placeholder="Complemento"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input placeholder="UF" {...register('uf')} error={errors.uf?.message} />
    </AddressFormContainer>
  )
}
