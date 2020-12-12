import { inject, injectable } from 'tsyringe'
import { SOME_REPOSITORY } from '../di-types'
import { SomeRepository } from '../domain/repository/some-repository'

export interface SomeUseCase {
  fetchSome(): string
}

@injectable()
export class SomeInteractor implements SomeUseCase {
  private readonly _someRepository: SomeRepository

  constructor(@inject(SOME_REPOSITORY) someRepository: SomeRepository) {
    this._someRepository = someRepository
  }

  fetchSome(): string {
    return this._someRepository.findSome()
  }
}
