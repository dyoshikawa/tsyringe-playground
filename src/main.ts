import 'reflect-metadata'
import { container } from 'tsyringe'
import { bootstrap } from './di-container'
import { SOME_USE_CASE } from './di-types'
import { SomeUseCase } from './use-case/some-use-case'

bootstrap()

const someUseCase = container.resolve<SomeUseCase>(SOME_USE_CASE)
console.log(someUseCase.fetchSome())
