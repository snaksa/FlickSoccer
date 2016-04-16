using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FlickSoccer.Web.Startup))]
namespace FlickSoccer.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
