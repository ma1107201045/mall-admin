import { AxiosResponse } from 'axios'

export default interface BaseApiInterface {
  /**
   * 保存数据
   * @param body 数据
   */
  save(body: object): Promise<AxiosResponse<any, any>>

  /**
   * 批量删除数据
   * @param ids 主键id集合
   */
  deleteByIds(ids: number[]): Promise<AxiosResponse<any, any>>

  /**
   * 更新数据
   * @param id 主键id
   * @param body 数据
   */
  updateById(id: number, body: object): Promise<AxiosResponse<any, any>>

  /**
   * 获取数据
   * @param id 主键id
   */
  getById(id: number): Promise<AxiosResponse<any, any>>

  /**
   * 获取数据集
   * @param query 查询参数
   */
  getListByPageAndParam(query: object): Promise<AxiosResponse<any, any>>
}
