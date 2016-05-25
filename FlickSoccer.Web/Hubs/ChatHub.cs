﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace FlickSoccer.Web.Hubs
{
    public class ChatHub : Hub
    {
        public void BallComing(double ux, double uy)
        {
            Clients.All.showBall(ux, uy);
        }
    }
}