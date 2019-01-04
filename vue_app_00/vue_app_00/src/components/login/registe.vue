  <template>      
        <div class="login_wrap">
			<div class="content">
	
				<div class="login_box">	
					
					<div class="login_form">
						<div class="login_title">
							注册
						</div>
						<form action="#" method="post">
							
							<div class="form_text_ipt">
								<input name="username" type="text" placeholder="手机号/邮箱" style="width:300px;margin-left:35px;">
							</div>
							<div class="ececk_warning"><span>手机号/邮箱不能为空</span></div>
							<div class="form_text_ipt">
								<input name="password" type="password" placeholder="密码" style="width:300px;margin-left:35px;">
							</div>
							<div class="ececk_warning"><span>密码不能为空</span></div>
							<div class="form_text_ipt">
								<input name="repassword" type="password" placeholder="重复密码" style="width:300px;margin-left:35px;">
							</div>
							<div class="ececk_warning"><span>密码不能为空</span></div>
							<div class="form_text_ipt">
								<input name="code" type="text" placeholder="验证码" style="width:300px;margin-left:35px;">
							</div>
							<div class="ececk_warning"><span>验证码不能为空</span></div>
							
							<div class="form_btn">
								<button type="button" onclick="javascript:window.location.href='#'"  style="background-color:#007ACC; color:#fff;">注册</button>
							</div>
							<div class="form_reg_btn">
								<span>已有帐号？</span><a href="index.html">马上登录</a>
							</div>
						</form>
						<div class="other_login">
							<div class="left other_left">
								<span>其它登录方式</span>
							</div>
							<div class="right other_right">
								<a href="#"><i class="fa fa-qq fa-2x"></i></a>
								<a href="#"><i class="fa fa-weixin fa-2x"></i></a>
								<a href="#"><i class="fa fa-weibo fa-2x"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>
<style>
.login_wrap{
      height:575px;
        background:url(http://127.0.0.1:3000/img/8435e5dde71190efcfe66029c41b9d16fdfa6023.jpg) repeat;
        margin:0;
        padding:0;
        background-size:100% 100%;
}
    .content{
       
    }
    .login_title{
         text-align:center;
        font-size:32px;
        padding:20px;
        color:#fff;
    }
    .form_btn,.form_reg_btn,.other_left{
       text-align:center;
       color:#000;
       margin:20px auto;
    }
    .ececk_warning{
        margin:5px 0px 10px 35px ;
        color:#fff;
    }
   
</style>