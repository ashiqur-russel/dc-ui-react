import React from 'react';

 const DcHeader = () => {

   // $('module-pi-header').modulePiHeader();

    return (

            <header class="module-pi-header "
		data-plugin="modulePiHeader"
		data-event-bubbling-intercept="header.outsideClick">
	<div class="module-button btn-navigation-wrapper">
		<button type="button" class="btn btn-navigation"></button>
		<div class="button-content">
			<span class="upper-line"></span>
			<span class="middle-line"></span>
			<span class="bottom-line"></span>
		</div>
	</div>
	<div class="header-left">
		<div class="header-logo">
			<a class="logo" href="/">
				<img src="images/logo-pi.svg" alt="logo"/>
			</a>
		</div>
		<div class="product-date-wrapper">
			<div class="product-name">
				<span>ProductName 123</span>
			</div>
			<div class="time-date-wrapper">
				<div class="component-date-time"
					 data-plugin="componentPiDateTime">
					<span class="time-date">6:38 AM 12/12/2019</span>
				</div>
			</div>
		</div>
	</div>
	<span class="toggle-meta-nav"></span>
	<div class="component-pi-meta-nav "
		 data-plugin="componentPiMetaNav">
		<div class="component-date-time"
			 data-plugin="componentPiDateTime">
			<span class="time-date">6:38 AM 12/12/2019</span>
		</div>
		<ul>
			<li>
				<a href="#">
						<span class="icon-wrapper basket-wrapper no-items">
							<i class="icon icon-dc_notification-01">
								<i class="bubble-wrapper">
									<i class="notification-bubble"></i>
								</i>
							</i>
						</span>
					Messages
				</a>
			</li>
			<li>
				<a href="/"
					   class="
					          
					          
					          login">
							<i class="icon icon-dc_user"></i>
						Profile
					</a>
			</li>
		</ul>
	</div>

	<div class="bottom-extensions">
		<div class="component-pi-meta-nav mobile"
			 data-plugin="componentPiMetaNav">
			<div class="component-date-time"
				 data-plugin="componentPiDateTime">
				<span class="time-date">6:38 AM 12/12/2019</span>
			</div>
			<ul>
				<li>
					<a href="#">
							<span class="icon-wrapper basket-wrapper no-items">
								<i class="icon icon-dc_notification-01">
									<i class="bubble-wrapper">
										<i class="notification-bubble"></i>
									</i>
								</i>
							</span>
						Messages
					</a>
				</li>
				<li>
					<a href="/"
						   class="
						          
						          
						          login">
								<i class="icon icon-dc_user"></i>
							Profile
						</a>
				</li>
			</ul>
		</div>
	</div>
</header>
        
    );
};

export default DcHeader;