<template>
    <div class="report">
        <XHeader :left-options="{showBack: this.$store.state.login.isIos}">发起举报</XHeader>
        <div>
            <group>
                <x-input required title="标题" placeholder="请输入标题" v-model="title"></x-input>
            </group>
            <group>
                <x-textarea required title="内容" placeholder="请输入举报内容" v-model="body" autosize></x-textarea>
            </group>
            <div class="weui-uploader" style="padding:15px;margin-bottom: 15px;">
                <div class="weui-uploader__hd">
                    <p class="weui-uploader__title">图片上传</p>
                </div>
                <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles">
                    </ul>
                    <div class="weui-uploader__input-box">
                        <input v-if="web" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" @change='dealImage' />
                        <input v-if="ios" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" @change='dealImage' />
                        <input v-if="android" id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" @change='dealImage' multiple capture="camera" />
                    </div>
                </div>
            </div>
            <div class="openTicket-submit">
                <XButton @click.native="submitReport" type="primary">提交</XButton>
            </div>
            <toast v-model="show" type="warn">{{err_msg}}</toast>
        </div>
    </div>
</template>

<script>
import { XHeader, Group, XInput, XTextarea, XButton, Toast } from 'vux';
import { mapActions } from 'vuex';
import axios from 'axios';
import lrz from 'lrz';
import apiConfig from '../api/apiConfig';
import browser from '../jslib/judgement-platform';

export default {
    data() {
        return {
            title: '',
            body: '',
            show: false,
            err_msg: '',
            image: false,
            image_id: 1,
            images: [],
            ios: false,
            android: false,
            web: false,
            // 这里定义前端压缩的配置
            // see: https://github.com/jwma/daily-coding/tree/master/local-resize-img-with-vue
            config: {
                width: 1200,
                height: 600,
                quality: 0.6,
            },
        };
    },
    created() {
        this.init();
    },
    methods: {
        ...mapActions([
            'createReport',
        ]),
        init() {
            if (browser.versions.android) {
                this.web = false;
                this.android = true;
            }
            if (browser.versions.ios || browser.versions.iPhone || browser.versions.ipad) {
                this.web = false;
                this.ios = true;
            }
        },
        async submitReport() {
            if (this.title === '' || this.body === '') {
                this.$vux.alert.show({
                    title: '提示',
                    content: '请填写举报内容',
                });
            } else {
                this.$vux.loading.show({
                    text: '上传中',
                });
                const param = new FormData();
                this.images.map((x, index) => {
                    param.append(`img${index + 1}`, x);
                    return true;
                });
                param.append('title', this.title);
                param.append('body', this.body);
                param.append('token', localStorage.getItem('token'));
                const instance = axios.create({
                    baseURL: apiConfig.baseUrl,
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                instance.post(apiConfig.create_report, param)
                .then((res) => {
                    if (res.data.status === 'success') {
                        this.$vux.alert.show({
                            title: '提示',
                            content: '成功举报',
                        });
                        this.$router.push('report');
                        this.$vux.loading.hide();
                    } else {
                        this.$vux.alert.show({
                            title: '提示',
                            content: res.data.err_msg,
                        });
                        this.$vux.loading.hide();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.$vux.alert.show({
                        title: '提示',
                        content: '举报失败，服务器无响应',
                    });
                    this.$vux.loading.hide();
                });
            }
        },
        // 处理图片以及图片预览
        dealImage(e) {
            if (this.images.length < 3) {
                const image = e.target.files[0];
                lrz(image, this.config)
                    .then((rst) => {
                        const resizeImage = this.convertBase64UrlToBlob(rst.base64);
                        const reader = new FileReader();
                        reader.readAsDataURL(resizeImage);
                        reader.onload = (event) => {
                            const result = event.target.result;
                            const ul = document.getElementById('uploaderFiles');
                            ul.insertAdjacentHTML(
                                'beforeend',
                                `<li id="image${this.image_id}" class="weui-uploader__file">
                                    <img src="${result}" width="100%" height="100%">
                                    <div class="remove-button">移除图片</div>
                                </li>`);
                            const li = document.getElementById(`image${this.image_id}`);
                            li.addEventListener('click', () => {
                                li.remove();
                                const file = document.getElementById('uploaderInput');
                                file.value = '';
                                this.images.map((x, index) => {
                                    if (x === resizeImage) {
                                        this.image = this.images.splice(index, 1);
                                    }
                                    return true;
                                });
                            });
                            this.images.push(resizeImage);
                            this.image_id += 1;
                        };
                    });
            } else {
                this.$vux.alert.show({
                    title: '提示',
                    content: '最多上传3张图片',
                });
            }
        },
        convertBase64UrlToBlob(urlData) {
            // 去掉url的头，并转换为byte
            const bytes = window.atob(urlData.split(',')[1]);

            // 处理异常,将ascii码小于0的转换为大于0
            const ab = new ArrayBuffer(bytes.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < bytes.length; i += 1) {
                ia[i] = bytes.charCodeAt(i);
            }
            return new Blob([ab], { type: 'image/png' });
        },
    },
    components: {
        XHeader,
        Group,
        XInput,
        XTextarea,
        XButton,
        Toast,
    },
};
</script>