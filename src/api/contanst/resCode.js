/**
 * 关于请求接口相关的常量
 * 0 代表成功
 * 20301 代表过期，可以使用refreshToken来继续请求
 * 20302 token解析失败
 * 20303 token不存在,完全找不到,(token表里面根本找不到这条记录)
 * 20303 token无效 (失效的意思是，被覆盖了。可能是刷新token之后被覆盖，也可能是发生账号转移设置了is_delete=true。)
 */
const code = {
  SUCCESS: 30200,
};

export { code };
