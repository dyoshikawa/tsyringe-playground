import { container } from 'tsyringe'
import { SOME_REPOSITORY, SOME_USE_CASE } from './di-types'
import { SomeDatabaseRepository } from './infrastructure/repository/some-database-repository'
import { SomeInteractor } from './use-case/some-use-case'

export const bootstrap = () => {
  container.register(SOME_REPOSITORY, { useClass: SomeDatabaseRepository })
  container.register(SOME_USE_CASE, { useClass: SomeInteractor })
}
