import { ChainId } from '@ogeefinance/ogeeswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x713e35713757cC28F96a0Eb2D95cf984c68B2471', // TODO
  [ChainId.HECOTESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
