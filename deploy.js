/*
 * @Author: mengkun822 1197235402@qq.com
 * @Date: 2023-04-20 15:14:16
 * @LastEditors: mengkun822 1197235402@qq.com
 * @LastEditTime: 2023-07-21 17:57:32
 * @FilePath: \ims_ui\deploy.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path');
const { NodeSSH } = require('node-ssh');

const ssh = new NodeSSH();
// 主机配置
const serverInfo = {
    host: '43.139.156.30',
    username: 'root',
    password: 'Mk968022',
};

ssh.connect(serverInfo).then(() => {
    console.log('connected');
    // Putting entire directories
    const failed = [];
    const successful = [];

    // 上传到远程服务器的地址
    ssh.putDirectory('./dist', '/www/wwwroot/blog.mkook.xyz', {
        recursive: true,
        concurrency: 10,
        // ^ WARNING: Not all servers support high concurrency
        // try a bunch of values and see what works on your server
        validate: function (itemPath) {
            const baseName = path.basename(itemPath);
            return (
                baseName.substr(0, 1) !== '.' && // do not allow dot files
                baseName !== 'node_modules'
            ); // do not allow node_modules
        },
        tick: function (localPath, remotePath, error) {
            if (error) {
                failed.push(localPath);
            } else {
                successful.push(localPath);
            }
        },
    }).then(function (status) {
        console.log(
            'the directory transfer was',
            status ? 'successful' : 'unsuccessful'
        );
        console.log('failed transfers', failed.join(', '));
        console.log('successful transfers', successful.join(', '));
        ssh.dispose();
    });
});
